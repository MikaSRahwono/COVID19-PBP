console.log('JIR MASUK')

$(document).ready(function(){

    $("#createButton").click(function() {
        var serializedData = $("#createForm").serialize();
        console.log(serializedData)

        $.ajax({
            url: '/to-do/',
            data: serializedData,
            type: 'post',
            success: function(response) {
                $("#taskList").append('<div class="card mb-1"><div class="card-body">' + response.task.activity + '</div></div>')
            }
        })
    });


});
 