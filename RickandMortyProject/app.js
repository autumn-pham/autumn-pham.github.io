alert('Something ricked this way comes!');

$(() => {

  // Rick Carousel

  let rickCurrentImgIndex = 0;

  const rickNumOfImages = $('.rick-carousel-images').children().length - 1;

  $('.rick-carousel-btn-next').on('click', () => {
    $('.rick-carousel-images').children().eq(rickCurrentImgIndex).hide();
    if (rickCurrentImgIndex < rickNumOfImages) {
      rickCurrentImgIndex++;
    } else {
      rickCurrentImgIndex = 0
    }
    $('.rick-carousel-images').children().eq(rickCurrentImgIndex).show();
    $('.carousel-text').css('display', 'none');
  })
  $('.rick-carousel-btn-previous').on('click', () => {
    $('.rick-carousel-images').children().eq(rickCurrentImgIndex).hide();
    if (rickCurrentImgIndex > 0) {
      rickCurrentImgIndex--;
    } else {
      rickCurrentImgIndex = rickNumOfImages;
    }
    $('.rick-carousel-images').children().eq(rickCurrentImgIndex).show();
    $('.carousel-text').css('display', 'none');
  })

  // Normal Rick AJAX
  $('.normal-rick').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text nrick')
    $('.rick-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/1'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  // Alien Rick AJAX

  $('.alien-rick').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text alrick')
    $('.rick-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/15'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  // Antenna Rick AJAX
  $('.antenna-rick').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text anrick')
    $('.rick-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/19'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  // Adjudicator Rick AJAX


  $('.adjudicator-rick').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text adrick')
    $('.rick-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/8'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  // Morty Carousel

  let mortyCurrentImgIndex = 0;

  const mortyNumOfImages = $('.morty-carousel-images').children().length - 1;

  $('.morty-carousel-btn-next').on('click', () => {
    $('.morty-carousel-images').children().eq(mortyCurrentImgIndex).hide();
    if (mortyCurrentImgIndex < mortyNumOfImages) {
      mortyCurrentImgIndex++;
    } else {
      mortyCurrentImgIndex = 0
    }
    $('.morty-carousel-images').children().eq(mortyCurrentImgIndex).show();
    $('.carousel-text').css('display', 'none');
  })
  $('.morty-carousel-btn-previous').on('click', () => {
    $('.morty-carousel-images').children().eq(mortyCurrentImgIndex).hide();
    if (mortyCurrentImgIndex > 0) {
      mortyCurrentImgIndex--;
    } else {
      mortyCurrentImgIndex = mortyNumOfImages;
    }
    $('.morty-carousel-images').children().eq(mortyCurrentImgIndex).show();
    $('.carousel-text').css('display', 'none');
  })

// Normal Morty AJAX

  $('.normal-morty').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text nmorty')
    $('.morty-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/2'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })


  // Alien Morty AJAX

  $('.alien-morty').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text almorty')
    $('.morty-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/14'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  // Antenna Morty AJAX

  $('.antenna-morty').one('click', (event) => {

    const $newDiv = $('<div>').addClass('carousel-text anmorty')
    $('.morty-carousel-images').append($newDiv)

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/18'}
    ).then(
      // success callback
      (data)=>{
        $newDiv.html(data.name + '<br/>' + data.gender + '<br/>' + data.species + '<br/>' + data.location.name + '<br/>' + data.status);
      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })


// bteam button clicks

// summer

  $('.summer-btn').on('click', (event) => {


    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/3'}
    ).then(
      // success callback
      (data)=>{
        $('#summerGender').html(data.gender);
        $('#summerSpecies').html(data.species);
        $('#summerLocation').html(data.location.name);
        $('#summerStatus').html(data.status);

      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  const $summerModal = $('.summerModal')

  const openSummerModal = () => {
    $summerModal.css('display', 'block');
  }

  $('.summer-btn').on('click', openSummerModal);

  const closeSummerModal = () => {
    $summerModal.css('display', 'none');
  }

  $('.summer-close-btn').on('click', closeSummerModal);

  // beth

  $('.beth-btn').on('click', (event) => {

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/4'}
    ).then(
      // success callback
      (data)=>{
        $('#bethGender').html(data.gender);
        $('#bethSpecies').html(data.species);
        $('#bethLocation').html(data.location.name);
        $('#bethStatus').html(data.status);

      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  const $bethModal = $('.bethModal')

  const openBethModal = () => {
    $bethModal.css('display', 'block');
  }

  $('.beth-btn').on('click', openBethModal);

  const closeBethModal = () => {
    $bethModal.css('display', 'none');
  }

  $('.beth-close-btn').on('click', closeBethModal);

  // jerry

  $('.jerry-btn').on('click', (event) => {

    $.ajax(
      {url:'https://rickandmortyapi.com/api/character/5'}
    ).then(
      // success callback
      (data)=>{
        $('#jerryGender').html(data.gender);
        $('#jerrypecies').html(data.species);
        $('#jerryLocation').html(data.location.name);
        $('#jerryStatus').html(data.status);

      },
      // fail callback
      ()=>{
        console.log(error);
      }
    );

  })

  const $jerryModal = $('.jerryModal')

  const openJerryModal = () => {
    $jerryModal.css('display', 'block');
  }

  $('.jerry-btn').on('click', openJerryModal);

  const closeJerryModal = () => {
    $jerryModal.css('display', 'none');
  }

  $('.jerry-close-btn').on('click', closeJerryModal);

  // gif carousel

  let gifCurrentImgIndex = 0;

  const gifNumOfImages = $('.gif-carousel-images').children().length - 1;

  $('.gif-carousel-btn-next').on('click', (event) => {
    event.preventDefault();
    $('.gif-carousel-images').children().eq(gifCurrentImgIndex).hide();
    if (gifCurrentImgIndex < gifNumOfImages) {
      gifCurrentImgIndex++;
    } else {
      gifCurrentImgIndex = 0
    }
    $('.gif-carousel-images').children().eq(gifCurrentImgIndex).show();
  })
  $('.gif-carousel-btn-previous').on('click', (event) => {
    event.preventDefault();
    $('.gif-carousel-images').children().eq(gifCurrentImgIndex).hide();
    if (gifCurrentImgIndex > 0) {
      gifCurrentImgIndex--;
    } else {
      gifCurrentImgIndex = gifNumOfImages;
    }
    $('.gif-carousel-images').children().eq(gifCurrentImgIndex).show();
  })


})
