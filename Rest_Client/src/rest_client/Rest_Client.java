/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest_client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.util.logging.Level;
import java.util.logging.Logger;
import static org.apache.http.HttpHeaders.ACCEPT;
import static org.apache.http.HttpHeaders.CONTENT_TYPE;
import org.apache.http.HttpResponse;

import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

/**
 *
 * @author mountant
 */
public class Rest_Client {

    private HttpClient client;
    private HttpGet allLaptops;
    private HttpGet allLaptopsBrand;
    private HttpGet allLaptopsMemory_Core;
    private HttpPut laptopsUpdate;
    private HttpDelete laptopsDelete;
    private HttpPost addlaptopsService;
    private static final String URL = 
    "http://localhost:8080/Computers_REST_API/computers/eshop";

    private String serviceName;


    /**
     * Used to open connection with client and LODsyndesis
     */
    public Rest_Client() {
        client = HttpClientBuilder.create().build();
    }

    public void updateLaptops(String name, int quantity) throws IOException {
        try {
            serviceName = "laptopQuantity";
            laptopsUpdate = new HttpPut(URL + "/" + serviceName + "/" + name + "/" + quantity);
            laptopsUpdate.addHeader(ACCEPT, "application/json");
            HttpResponse response = client.execute(laptopsUpdate);
            int responseCode = response.getStatusLine().getStatusCode();
            System.out.println("Response Code " + responseCode);
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);

        }
    }

    public void getLaptops() throws IOException {
        try {
            serviceName = "laptops";
            allLaptops = new HttpGet(URL + "/" + serviceName);
            allLaptops.addHeader(ACCEPT, "application/json");
            HttpResponse response = client.execute(allLaptops);
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    
    public void getLaptopsWithBrand(String brand) throws IOException {
        try {
            serviceName = "laptops/"+brand;
            allLaptopsBrand = new HttpGet(URL + "/" + serviceName);
            allLaptopsBrand.addHeader(ACCEPT, "application/json");
            HttpResponse response = client.execute(allLaptopsBrand);
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void getLaptopsWithMemoryCore(String memory,String core) throws IOException {
        try {
            serviceName = "laptopsWithSpecs/"+memory;
            if(!"".equals(core))
                serviceName+="?core="+core;
            allLaptopsMemory_Core = new HttpGet(URL + "/" + serviceName);
            allLaptopsMemory_Core.addHeader(ACCEPT, "application/json");
            HttpResponse response = client.execute(allLaptopsMemory_Core);
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void addLaptops(String json) throws IOException {
        try {
            serviceName = "newLaptop";
            addlaptopsService = new HttpPost(URL + "/" + serviceName);
            addlaptopsService.addHeader(ACCEPT, "application/json");
            addlaptopsService.addHeader(CONTENT_TYPE, "application/json");
            StringEntity toSend = new StringEntity(json);
            addlaptopsService.setEntity(toSend);
            HttpResponse response = client.execute(addlaptopsService);
            int responseCode = response.getStatusLine().getStatusCode();
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);

        }
    }
    
    public void deleteLaptops(String name) throws IOException {
        try {
            serviceName = "laptop";
            laptopsDelete = new HttpDelete(URL + "/" + serviceName + "/" + name);
            laptopsDelete.addHeader(ACCEPT, "application/json");
            HttpResponse response = client.execute(laptopsDelete);
            int responseCode = response.getStatusLine().getStatusCode();
            System.out.println("Response Code " + responseCode);
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception ex) {
            Logger.getLogger(Rest_Client.class.getName()).log(Level.SEVERE, null, ex);

        }
    }

    public static void main(String[] args) throws IOException {
        Rest_Client rs = new Rest_Client();
        System.out.println("All laptops");
        rs.getLaptops();
        System.out.println("All laptops with brand Toshiba");
        rs.getLaptopsWithBrand("Toshiba");
        
        System.out.println("All laptops with memory 8GB");
        rs.getLaptopsWithMemoryCore("8GB","");
        String json = "{\n"
                + "    \"brand\":\"ASUS\","
                + "    \"memory\":\"8GB\","
                + "    \"core\": \"i5\","
                + "    \"name\": \"ASUS_V4\","
                + "    \"quantity\": 10"
                + "}";
       System.out.println("Add Laptop ASUS_V4");
       rs.addLaptops(json); 
       System.out.println("Print Again Laptops");
       rs.getLaptops();
       System.out.println("Update Laptop");
       rs.updateLaptops("ASUS_V4", 15);
       System.out.println("Print Again Laptops");
       rs.getLaptops();
       System.out.println("Delete Laptop");
       rs.deleteLaptops("ASUS_V4");
       System.out.println("Print Again Laptops");
       rs.getLaptops();
    }

}
