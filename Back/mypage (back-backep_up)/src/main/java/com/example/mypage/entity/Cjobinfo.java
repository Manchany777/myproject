package com.example.mypage.entity;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Cjobinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postid;

    @Column
    private String id;

    @Column
    private String type;

    @Column
    private String boardtype;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private String industry;
}
