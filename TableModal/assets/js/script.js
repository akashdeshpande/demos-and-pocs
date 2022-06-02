$("#btn1").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos", success: function(result){
    //   $("#div1").html(result);
        console.log(result);
    }});
});