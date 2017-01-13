package com.dia.app.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.dia.app.dbrequests.DBAccess;
import com.dia.app.model.Profile;

@Component
public class ProfileService {

   @Autowired
   private DBAccess dba;

   @Transactional
   public void add(Profile profile) {
       dba.persist(profile);
   }
    
   @Transactional
   public void addAll(Collection<Profile> profiles) {
       for (Profile p : profiles) {
           dba.persist(p);
       }
   }

}
