<%-- 
    Document   : example2
    Created on : Nov 19, 2021, 6:35:50 PM
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
 for(int i=0; i<numEntries; i ++) {
   out.println("<li>" + (1 + (int)(Math.random() * 10)));
 }
 %>
</ul>
</body></html>