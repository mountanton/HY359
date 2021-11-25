/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import java.util.HashSet;
import java.util.Set;
import jakarta.ws.rs.core.Application;

/**
 *
 * @author mountant
 */
@jakarta.ws.rs.ApplicationPath("computers")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    
    @Override 
  public Set<Object> getSingletons() {
      Set<Object> set = new HashSet<>();
      set.add(new LaptopsAPI());
      return set;
  }

    private void addRestResourceClasses(Set<Class<?>> resources) {
    }

}
