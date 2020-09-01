Meet the cast of Rick and Morty!

Link to live site: https://autumn-pham.github.io/

Technologies used:

I used the Rick and Morty API: https://rickandmortyapi.com/ and followed the ajax function in jquery we went over in class.

For my complex UI module I made a carousel for the different Ricks and the different Mortys that would display information about them upon clicking the image.

I also had a modal for the remaining three main characters so if you click on the about button, more information about them would come up.

Approach taken:

I spent HOURS looking for a solid API to use after first my failed project proposal (cors error, API in XML). Once I settled on something, I did a quick wireframe of what I wanted to display. Then I wrote the html (which I adjusted as I went along) so that I could write my script.

I wrote the script for what I called the "bteam characters" first, because I figured it would be easier dealing with only one image at a time. I started inserting CSS here so that I could hide the modal until my clicks.

Then I attacked the carousel, making sure the images showed and the next/previous buttons worked. It was so helpful and I loved it because I was missing an image later on and it was so easy to add without messing up my code!

Next, I worked on writing code to show information about the specific Rick/Morty. I didn't want a modal for this because honestly I didn't think about it until I already had my image carousel up and was too stubborn to change it. Then I thought incorporating create a new div! Voila.

The gif carousel came after. Then my social media icons.

When I had everything in place, I went further into the styling. Sorry, I started with desktop design and then made it responsive according to max-width. I find it so much easier to do the desktop design first.

Unsolved problems:

Because of the way I wrote my code to create a new div and append it when someone clicked on a Rick or Morty image, I had to limit clicks on the characters to one time, otherwise I'd have divs popping up endlessly (saw that happen). That means unless you refresh the page, you cannot reclick on an image to get the information again since I also wrote script to hide the display again on the next or previous button.

Also for all the messing around I did, I couldn't get the about buttons to be within my borders for the responsive design.
