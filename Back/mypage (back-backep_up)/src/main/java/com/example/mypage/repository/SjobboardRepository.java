package com.example.mypage.repository;

import com.example.mypage.entity.Sjobinfo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SjobboardRepository extends JpaRepository<Sjobinfo, String> {
}
