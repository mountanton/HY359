<%-- 
    Document   : example2_variation
    Created on : Nov 19, 2021, 6:36:59 PM
    Author     : mountant
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title>Random Numbers</title>
</head>
<body>
<h1>Random Numbers</h1>
<ul>
 <% int numEntries = 10;
 for(int i=0; i< numEntries; i++) { %>
 <li>
 <%=(1 + (int)(Math.random() * 10))%>
 <%} %> 
 </li>
</ul>
</body></html>