package com.example.mypage.service;

import java.util.List;
import java.util.Optional;

import com.example.mypage.entity.*;
import com.example.mypage.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component   // 서비스로 만들 건 다 bean으로 만들어 줘야함 (@Component를 붙여놔서) (수업시간에는 @Service를 썼음)
public class MypageService {
    @Autowired
    MypageRepository mypageRepository;
    @Autowired
    CjobboardRepository cjobboardRepository;
    @Autowired
    SjobboardRepository sjobboardRepository;
    @Autowired
    MyboardRepository myboardRepository;

    @Autowired
    MylikeRepository mylikeRepository;

    public Myinfo myInfo(String id) throws Exception {
        Optional<Myinfo> myinfo = mypageRepository.findById(id);
        if(myinfo.isPresent()) return myinfo.get();
        return null;
    }

    //////////////////////////////////////////////

    public List<Cjobinfo> cjobinfo() throws Exception {
        List<Cjobinfo> cjobinfo = cjobboardRepository.findAll();
        return cjobinfo;
    }

    //////////////////////////////////////////////

    public List<Sjobinfo> sjobinfo() throws Exception {
        List<Sjobinfo> sjobinfo = sjobboardRepository.findAll();
        return sjobinfo;
    }

    //////////////////////////////////////////////

    public List<Myboardinfo> myboardinfo() throws Exception {
        List<Myboardinfo> myboardinfo = myboardRepository.findAll();
        return myboardinfo;
    }

    public List<Mylikeinfo> mylikeinfo() throws Exception {
        List<Mylikeinfo> mylikeinfo = mylikeRepository.findAll();
        return mylikeinfo;
    }
}
