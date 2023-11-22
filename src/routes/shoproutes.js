const express= require ("express");
const router=express.router();

router.get("/",shopControlers.shop);

router.get("/item/:id",shopControlers.item

// {const id=req.params.id;
// res.send({item})}
);
router.post("/item/:id/add",(req,res)=>router.send("route to add current item to shop cart "));

router.get("/cart",shopControlers.cart);

router.post("/cart/",(req,res)=>router.send("route to got checkout page "));





modules.export=router;