package com.example.mypage.repository;

import com.example.mypage.entity.Myboardinfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyboardRepository extends JpaRepository<Myboardinfo, String> {
}
