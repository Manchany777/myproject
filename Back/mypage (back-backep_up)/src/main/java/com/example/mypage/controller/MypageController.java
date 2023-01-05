package com.example.mypage.controller;

import java.util.List;

import com.example.mypage.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypage.service.MypageService;

@RestController
public class MypageController {

    @Autowired
    MypageService mypageService;


    @GetMapping("/myinfo/{id}")
    public ResponseEntity<Myinfo> myInfo(@PathVariable String id) {
        System.out.println("에러 발생 여부 테스트");
        ResponseEntity<Myinfo> res = null;

        try {
            Myinfo myai = mypageService.myInfo(id);
            /* 리스트형태의 데이터 찍는 코드 */
             res = new ResponseEntity<Myinfo>(myai, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            res = new ResponseEntity<Myinfo>(HttpStatus.BAD_REQUEST);
        }
        return res;
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/cjobinfo")
    public ResponseEntity<List<Cjobinfo>> cjobinfo() {
        System.out.println("에러 발생 여부 테스트");
        ResponseEntity<List<Cjobinfo>> res = null;
        List<Cjobinfo> myai = null;

        try {
            myai = mypageService.cjobinfo();
            /* 리스트형태의 데이터 찍는 코드 */
            for (Cjobinfo mi : myai) {
                System.out.println(mi);
            }

            for(int i=0; i<myai.size(); i++) {
                System.out.println(myai.get(i));
            }
            /* 리스트형태의 데이터 찍는 코드 */
            res = new ResponseEntity<List<Cjobinfo>>(myai, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            res = new ResponseEntity<List<Cjobinfo>>(myai, HttpStatus.BAD_REQUEST);
        }
        return res;
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/sjobinfo")
    public ResponseEntity<List<Sjobinfo>> sjobinfo() {
        System.out.println("에러 발생 여부 테스트");
        ResponseEntity<List<Sjobinfo>> res = null;
        List<Sjobinfo> myai = null;

        try {
            myai = mypageService.sjobinfo();
            /* 리스트형태의 데이터 찍는 코드 */
            for (Sjobinfo mi : myai) {
                System.out.println(mi);
            }

            for(int i=0; i<myai.size(); i++) {
                System.out.println(myai.get(i));
            }
            /* 리스트형태의 데이터 찍는 코드 */
            res = new ResponseEntity<List<Sjobinfo>>(myai, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            res = new ResponseEntity<List<Sjobinfo>>(myai, HttpStatus.BAD_REQUEST);
        }
        return res;
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/myboardinfo")
    public ResponseEntity<List<Myboardinfo>> myboardinfo() {
        System.out.println("에러 발생 여부 테스트");
        ResponseEntity<List<Myboardinfo>> res = null;
        List<Myboardinfo> myai = null;

        try {
            myai = mypageService.myboardinfo();
            /* 리스트형태의 데이터 찍는 코드 */
            for (Myboardinfo mi : myai) {
                System.out.println(mi);
            }

            for(int i=0; i<myai.size(); i++) {
                System.out.println(myai.get(i));
            }
            /* 리스트형태의 데이터 찍는 코드 */
            res = new ResponseEntity<List<Myboardinfo>>(myai, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            res = new ResponseEntity<List<Myboardinfo>>(myai, HttpStatus.BAD_REQUEST);
        }
        return res;
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/mylikeinfo")
    public ResponseEntity<List<Mylikeinfo>> mylikeinfo() {
        System.out.println("에러 발생 여부 테스트");
        ResponseEntity<List<Mylikeinfo>> res = null;
        List<Mylikeinfo> myai = null;

        try {
            myai = mypageService.mylikeinfo();
            /* 리스트형태의 데이터 찍는 코드 */
            for (Mylikeinfo mi : myai) {
                System.out.println(mi);
            }

            for(int i=0; i<myai.size(); i++) {
                System.out.println(myai.get(i));
            }
            /* 리스트형태의 데이터 찍는 코드 */
            res = new ResponseEntity<List<Mylikeinfo>>(myai, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            res = new ResponseEntity<List<Mylikeinfo>>(myai, HttpStatus.BAD_REQUEST);
        }
        return res;
    }
}
