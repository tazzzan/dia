package com.dia.app.dbrequests;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dia.app.model.Profile;

@Repository
public class DBAccess {
  
  @PersistenceContext
//  EntityManagerFactory emfdb = Persistence.createEntityManagerFactory("agisdb");
  EntityManager em;
  
  @Transactional
  public void persist(Profile p) {
    // some business logic
    if (p.getProfileNickName()==null) {
      throw new IllegalArgumentException("Name can not be null");
    }
    em.persist(p);
  }

}
