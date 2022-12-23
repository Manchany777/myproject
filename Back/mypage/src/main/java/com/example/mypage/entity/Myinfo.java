package com.example.mypage.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.OffsetDateTime;

import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Myinfo {
    @Id
    private String id;

    @Column
    private String password;

    @Column
    private String type;

    @Column
    private String name;

    @Column
    private Integer age;

    @Column
    private String phone;

    @Column
    private OffsetDateTime birth;

    @Column
    private String email;

    @Column
    private String industry;

    @Column
    private String company;

    @Column
    private String position;

    @Column
    private String job;

    @Column
    private String career;

    @Column
    private String filename;
}

