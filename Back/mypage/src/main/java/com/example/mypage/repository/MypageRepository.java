package com.example.mypage.repository;

import com.example.mypage.entity.Myinfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MypageRepository extends JpaRepository<Myinfo, String> {
}
