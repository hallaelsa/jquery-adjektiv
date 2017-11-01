$(function() {
    var count;
    var adjektiv;
    var hanHun;
    var adj1 = "";
    var adj2 = "";
    var adj3 = "";
    var adj4 = "";
    var adj5 = "";

    $list = $('#adjList');
    

   

    $('ul li').on('click', function(){
        
        if($(this).hasClass('chosen') ){
            $(this).removeClass('chosen');
        } else {
            $(this).addClass('chosen');
        }
       updateCount();
    });

    function updateCount() {
        count = $('li.chosen').length;
        $('#counter').text(count);

        if(count == 6) {
            $('#counter').css({'background-color':'palevioletred', 'color':'lightgoldenrodyellow'} );
        } else {
            $('#counter').css({'background-color':'lightgoldenrodyellow', 'color':'palevioletred'} );
        }
    }

    $('#add').on('click', function(){
        if(count == 6) {
            $list.removeClass('hide');
            $('#inputArea2').addClass('hide').removeClass('show');
            $list.empty();
            adjektiv = $('li.chosen').toArray();
            
            adj1 = adjektiv[5].innerText;
            adj2 = adjektiv[3];
            adj3 = adjektiv[0];
            adj4 = adjektiv[1].innerText;
            adj5 = adjektiv[4];
            adj6 = adjektiv[2].innerText;

            generateStory();
            $('#inputArea3').addClass('show').removeClass('hide');
        }

        
    });

    function generateStory() {
        if(kjonn == 'kvinne') {
            hanHun = 'hun';
        } else if(kjonn == 'mann') {
            hanHun = 'han';
        }

        adj2 = checkSpell(adj2);
        adj3 = checkSpell(adj3);
        adj5 = checkSpell(adj5);
        
        

        $('#historie').text("Det var en " + adj1 + " dag og den " + adj2.innerText + " " + username + " var på det " + adj3.innerText + " internettet. Der kom " + hanHun + " over en " + adj4 + " side laget av den " + adj5.innerText + " Miina. " + hanHun.charAt(0).toUpperCase()+hanHun.slice(1) + " syntes den var " + adj6 + ".");
    }

    function checkSpell(adj) {
        var adjr = adj;
        if(adjr.innerText.endsWith('e') )
        {
        } else {
            adjr.append('e');
        } 

        return adjr;
    }

    $('#back').on('click', function(){
        $('#inputArea2').addClass('show').removeClass('hide');
        $('#inputArea3').addClass('hide').removeClass('show');
    });

    

});