<%-- 
    Document   : registration
    Created on : Nov 19, 2021, 4:25:06 PM
    Author     : mountant
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<h1>Registration Form</h1>        
                <form id="myForm" name="myForm" action='index.jsp'>
                    <label for="firstName">First name:</label><br>
                    <input type="text"  id="fname" name="firstName" required><br>
                    <label for="lastName">Last name:</label><br>
                    <input type="text"  name="lastName" id="lname" required><br>
                    Favourite Sports <br>
                    <input type="radio" id="nba" name="sport" value="basketball" checked>
                    <label for="nba">Basketball</label>
                    <input type="radio" id="tennis" name="sport" value="tennis">
                    <label for="tenis">Tennis</label><br>
                    Team: <select id="team" name="team"> 
                        <option value="dallas" selected="selected">Dallas</option>
                        <option value="bucks">Milwaukee Bucks</option>
                    </select>

                    <br> Country:   <input id="country" name="country" value="" /> <br>
                    <input type="submit" class="button" value="Register">
                </form>