const express= require ("express");
const router=express.router();

router.get("/home",mainControlers.home);
router.get("/contact",mainControlers.contact);
router.get("/about",mainControlers.about);
router.get("/faqs",mainControlers.faqs);



modules.export=router;

