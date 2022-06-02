$("#btn1").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos", success: function(result){
    //   $("#div1").html(result);
        console.log(result);
        let child = "";
        for(let i = 0; i < result.length; i++) {
            child = "";
            let { id, userId, title, completed } = result[i];
            child = `<tr>
                <td>${id}</td>
                <td>${userId}</td>
                <td>${title}</td>
                <td>${completed}</td>
                <td><button class="btn btn-outline-light edit-btn">Edit</button></td>
            </tr>`;
            $("#table1").append(child);
        }
        
    }});
});

function editData(id) {
    console.log(id);
} 