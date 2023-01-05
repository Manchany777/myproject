package com.example.mypage.repository;

import com.example.mypage.entity.Mylikeinfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MylikeRepository extends JpaRepository<Mylikeinfo, String> {
}
