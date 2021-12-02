<%@page import="mainClasses.Person"%>
<!doctype html>
<html lang="en" class="no-js">
    <head> 
        <script src="js/ajax.js" defer></script>
        <link rel="stylesheet" href="css/cssExamples.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <%
            Person person = (Person) request.getSession().getAttribute("person");
            String registrationCompleted = "", seeData = "", tsitsipasCat = "";

            if (person==null && request.getParameter("firstName") != null) {
                Person p1=new Person();
                p1.setFirstName(request.getParameter("firstName"));
                p1.setLastName(request.getParameter("lastName"));
                p1.setCountry(request.getParameter("country"));
                p1.setSport(request.getParameter("sport"));
                p1.setTeam(request.getParameter("team"));
                p1.setValues();
                person=p1;
                request.getSession().setAttribute("person", person);
                registrationCompleted="yes";
            }
            if (request.getParameter("seeDataAgain") != null) {
                seeData = request.getParameter("seeDataAgain").toString();
            }
          
            if (request.getParameter("tsitsipasCat") != null) {
                tsitsipasCat = "img/tennisCat.jpg";
            }
            if (request.getParameter("logout") != null) {
                request.getSession().removeAttribute("person");
                person=null;
            }
        %>
    </head>
    <body>
        <h2>HY 359-Examples</h2>
        <div class="row">
            <div class="column column1Width" id="choices" style="background-color:#ADD8E6;">
                <%if (person == null) {%>
                <jsp:include page="registration.jsp" />
                <%} else {%>
                <jsp:include page="choices.jsp" />
                <%}
                %>

                <br>	

            </div>
            <div class="column column2Width" id="output" style="background-color:#fffff0;">
                <h2>Output</h2>
                <div id="ajaxContent">


                    <p>
                        <%if (person != null && (registrationCompleted.equals("yes") || seeData.equals("yes"))) {
                            if (registrationCompleted.equals("yes")) {%>
                    <h1> Your Registered data</h1>
                    <%} else if (seeData.equals("yes")) { %>
                    <h1> Your Data again</h1>
                    <%}%>

                    <table>
                        <tr><th>Category</th><th>Value</th></tr>
                        <tr><td>Message</td><td><%=person.getMessage()%></td></tr>
                        <tr><td>Name</td><td><%=person.getFirstName()%></td></tr>
                        <tr><td>Surname</td><td><%=person.getLastName()%></td></tr>
                        <tr><td>Country</td><td><%=person.getCountry()%></td></tr>
                        <tr><td>Sport</td><td><%=person.getSport()%></td></tr>
                    </table>

                    <%}%>

                    <%if (!tsitsipasCat.equals("")) {%>
                    <img src='<%=tsitsipasCat%>'/>
                    <%}%>
                    </p>

                </div>
            </div>

        </div>

    </body>

</html>

