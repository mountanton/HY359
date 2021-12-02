<%-- 
    Document   : example3
    Created on : Nov 19, 2021, 6:37:35 PM
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
<%!
 private int randomNum = (1 + (int)(Math.random() * 10));
%>
<h1>Semi-Random Number:<br><%= randomNum %></h1>
</body></html>