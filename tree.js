 $(document).ready(function(){
      $.ajax({    
       type: "GET",  
       url: "data.xml",  
       dataType: "xml",  
       success: function(xml) {  
        $(xml).find('book').each(function(){     
            document.writeln($(this).attr("id"))    
            $(this).find('name').each(function(){ document.writeln($(this).text())})  
             }) 
 }  }) })