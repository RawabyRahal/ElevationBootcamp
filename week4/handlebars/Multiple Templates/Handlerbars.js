const renderFirst = function(){
    const source = $('#first-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ text: "This gets rendered" });
    $('body').append(newHTML);  
  }
  
  const renderSecond = function(){
    const source = $('#second-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ moreText: "This also gets rendered" });
    $('#special').append(newHTML);  
  }
  
  renderFirst()
  renderSecond()