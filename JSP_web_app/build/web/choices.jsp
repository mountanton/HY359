<h1>choices</h1>
<form action="index.jsp">
    <input hidden type='text' name='seeDataAgain' value="yes">
 <input type="submit" class="button" value="See Your Data">
</form>

Favourite Dog: <br>
<input list='dogs' id='dog'> 
<datalist id='dogs'>
    <option value="Labrador Retriever">
    <option value="Chihuahua">
    <option value="Golden Retriever">
    <option value="Yorkshire Terrier">
    <option value="Poodle">
    <option value="Boxer">

</datalist>
<button onclick='getDogInformation()'  class='button'>Information</button><br>

<form action="index.jsp">
    <input hidden type='text' name='tsitsipasCat' value="yes">
 <input type="submit" class="button" value="See Tsitsipas Cat">
</form>

<form action="index.jsp">
    <input hidden type='text' name='logout' value="yes">
 <input type="submit" class="button" value="Logout">
</form>