package com.example.mypage.repository;

import com.example.mypage.entity.Cjobinfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CjobboardRepository extends JpaRepository<Cjobinfo, String> {
}
