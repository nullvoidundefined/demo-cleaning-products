const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();
const cors = require("cors");
const knex = require("knex"); // postgres ORM
const db = knex({
  client: "pg",
  connection: {
    host: "the-rounds-interview-db.clv3ihlk7uem.us-east-1.rds.amazonaws.com",
    port: "5432",
    database: "postgres",
    user: "interviewer",
    password: "f9LxT#YzdWT^g&",
  },
});

app.use(cors());

app.get("/itemDetail/:itemId", (req, res) => {
  const { itemId } = req.params;
  const item = {
    name: "Foo Item",
    id: "aj22ftw4",
  };
  res.status(200).json(item);
});

app.get("/itemList/:userId", async (req, res) => {
  const { userId } = req.params;
  const bundle = await getBundle(userId);
  const recommended = await getRecommended(userId);
  const payload = {
    bundle,
    recommended,
  };
  res.status(200).json(payload);
});

app.get("/user/:userId", (req, res) => {
  db.raw("select * from users where id = ?", [req.params.userId]).then(
    function (resp) {
      res.status(200).json(resp.rows[0]);
    }
  );
});

app.put("/bundle/addItem", jsonParser, async (req, res) => {
  const { itemId, userId } = req.body;
  addProductToBundle(itemId, userId)
    .then((id) => {
      res.status(200).json(`Add Item Success: ${id}`);
    })
    .catch((err) => {
      res.status(500).json(`Add Item Error: ${err}`);
    });
});

app.put("/bundle/removeItem", jsonParser, (req, res) => {
  const { itemId, userId } = req.body;
  removeFromBundle(itemId, userId)
    .then((id) => {
      res.status(200).json(`Remove Item Success: ${id}`);
    })
    .catch((err) => {
      res.status(500).json(`Remove Item Error: ${err}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * Below are functions that make the DB calls you'll need to complete the problem.
 */

const addProductToBundle = async (productId, userId) => {
  return db
    .insert({
      product_id: productId,
      user_id: userId,
    })
    .into("user_products")
    .returning("id");
};

const removeFromBundle = async (productId, userId) => {
  return db("user_products")
    .where({
      product_id: productId,
      user_id: userId,
    })
    .del();
};

const getBundle = async (userId) => {
  return db
    .select([
      "products.id",
      "products.name",
      "products.price",
      "products.description",
      "products.img_link",
    ])
    .from("user_products")
    .innerJoin("products", "user_products.product_id", "products.id")
    .where("user_products.user_id", userId);
};

const getProductsByPopularity = async () => {
  return db
    .count("product_id")
    .select("product_id")
    .from("user_products")
    .groupBy("product_id")
    .orderBy("count", "desc");
};

const getProducts = async () => {
  return db
    .select(["name", "id", "price", "description", "img_link"])
    .from("products");
};

// This could be written more efficiently as a single query,
const getRecommended = async (userId) => {
  const userProducts = await getBundle(userId);
  const popularProducts = await getProductsByPopularity();
  const products = await getProducts();
  const recommendedIds = popularProducts.filter((product) => {
    return !userProducts.find((userProduct) => {
      return userProduct.id === product.product_id;
    });
  });
  return recommendedIds.map((recommended) => {
    return products.find((product) => {
      return product.id === recommended.product_id;
    });
  });
};
