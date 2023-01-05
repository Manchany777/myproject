package com.example.mypage.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
public class Myboardinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postid;
    @Column
    private String userid;
    @Column
    private int type;
    @Column
    private String subject;
    @Column
    private String industry;
    @Column
    private String content;
    @Column
    private Boolean anonymous;
}
