$("#btn1").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos/1", success: function(result){
    //   $("#div1").html(result);
        console.log(result);
    }});
});