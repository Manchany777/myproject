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
public class Mylikeinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postid;

    @Column
    private String title;

    @Column
    private String account;

    @Column
    private String boardtype;
}
