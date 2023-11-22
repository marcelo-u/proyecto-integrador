const mainControlers={
home:(req,res)=>router.send("route for view Home"),
contact:(req,res)=>router.send("route for view Contac"),
about:(req,res)=>router.send("route for view About"),
faqs:(req,res)=>router.send("route for view Faqs"),
}

modules.export=mainControlers;
