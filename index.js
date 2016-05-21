function quoteGen () {
  var randomNum = Math.random();
  var tweetString = "";
  var custom = "https://twitter.com/intent/tweet?text=";
  var quote = "";
  var author = "";
  if (randomNum <= 0.05) { 
  quote = '"What we do in life echoes in eternity."'; 
    
  author = " - Maximus, Gladiator, 2000";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
 /* concatenate quote + author to url and assign back in custom variable */
  document.getElementById("tweet").setAttribute("href", custom);
 /* add href attribute to tweet button, with custom text value */

 } else if (randomNum <= 0.1) {
   
  quote = '"Not all treasure is silver and gold, mate."'; 
   
  author = " - Jack Sparrow, The Curse of The Black Pearl, 2003";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.15) {

  quote = '"Do or do not. There is no try."';

  author = " - Yoda, Episode V: The Empire Strikes Back, 1980";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href", custom);
 } else if (randomNum <= 0.2) {

  quote = '"There\'s a difference between knowing the path and walking the path."';

  author = " - Morpheus, The Matrix, 1999";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.25) {

  quote = '"Never give up. Never surrender."';
    
  author = " - Jason Nesmith, Galaxy quest, 1999";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href", custom);
 } else if (randomNum <= 0.3) {

  quote = '"All we have to decide is what to do with the time that is given to us."';  
    
  author = " - Gandalf, The Fellowship of the ring, 2001";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.35) {
 
  quote = '"You eat pieces of sh*t for breakfast?"';  
    
  author = " - Happy Gilmore, Happy Gilmore, 1996";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.4) {

  quote = '"I didn\'t know they handed out rings at the holocaust."';

  author = " - Alan Garner, The Hangover, 2009";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.45) {

  quote = '"Where did you get those clothes, at the… toilet store?"';
    
  author = " - Brick Tamland, Anchorman, 2004";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);

 } else if (randomNum <= 0.5) {

  quote = '"You can\'t really dust for vomit"';
    
  author = " - Nigel Tufnel, This Is Spinal Tap, 1984";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.55) {

  quote = '"Why so serious?"';
    
  author = " - The Joker, The Dark Knight, 2008";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.6) {

  quote = '"May The Force Be With You"';
    
  author = " - Han Solo, Episode IV: A New Hope, 1977";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.65) {

  quote = '"The Names Bond... James Bond."';    

  author = " - James Bond, Casino Royale, 2006";     
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);    
    
 } else if (randomNum <= 0.7) {
    
  quote = '"Hasta la vista, baby."';
 
  author = " - The Terminator, Terminator 2: Judgement Day, 1991";      
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 } else if (randomNum <= 0.75) {
    
  quote = '"You either die a hero or you live long enough to see yourself become the villain."'; 
    
  author = " - Harvey Dent, The Dark Knight, 2008";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
    
  } else if (randomNum <= 0.8) {

  quote = '"Why do we fall sir? so that we can learn to pick ourselves up."';
    
  author = " - Alfred, Batman Begins, 2005";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);

  }  else if (randomNum <= 0.85) {

  quote = '"There’s some good in this world, Mr. Frodo… and it’s worth fighting for."';
    
  author = " - Samwise Gamgee, The Two Towers, 2002";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);

 } else if (randomNum <= 0.9) {

  quote = '"You\’ve got red on you..."';
    
  author = " - Various, Shaun Of The Dead, 2004";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);
 }  else if (randomNum <= 0.95) {

  quote = '"Matt Damon."'; 
    
  author = " - Matt Damon, Team America: World Police, 2004";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
    
  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom);   
 } else {
    
  quote = '"Yippee-ki-yay, motherf*cker."';
    
  author = " - John McClane, Die Hard, 1988";
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  custom += quote + author;
  document.getElementById("tweet").setAttribute("href",custom); 
 }
}
window.onload = quoteGen();
/* when browser window loaded, run function */