const { query } = require("../config/database");

const router = require("express").Router();

/**
 * 장소 종류 코드 >  
 * 1:카페,음식점 / 
 * 2:병원 / 
 * 3:어린이집 / 
 * 4:유치원 / 
 * 5:키즈카페 / 
 * 6:체험관 / 
 * 7:유원지 / 
 * 8:장난감도서관 / 
 * 9:보육센터
 */

router.post("/api/places/restaurants", async (req, res)=> {
    const restaurantList = require("../json/restaurants.json");
    
    for(let item of restaurantList) {
        const space_code = 1;
        let { store_name, address, phone, lat, lon, carriage, bed, 
            tableware, nursingroom, meetingroom, diapers, playroom, chair, menu } = item;
        
        carriage = carriage === "○" ? 1 : 0;
        bed = bed === "○" ? 1 : 0;
        tableware = tableware === "○" ? 1 : 0;
        nursingroom = nursingroom === "○" ? 1 : 0;
        meetingroom = meetingroom === "○" ? 1 : 0;
        diapers = diapers === "○" ? 1 : 0;
        playroom = playroom === "○" ? 1 : 0;
        chair = chair === "○" ? 1 : 0;
        menu = menu === "○" ? 1 : 0;

        const SQL = `
        insert into 
        spaces( space_code, space_name, addr, phone, lat, lon, add_info )
        values( 
            ?, ?, ?, ?, ?, ?, 
            json_object( 
                "carriage",? ,
                "bed",? ,
                "tableware",? ,
                "nursingroom",? ,
                "meetingroom",? ,
                "diapers",? ,
                "playroom",? ,
                "chair",? ,
                "menu",? 
            )
        );`;
        query(SQL,
        [
            space_code, 
            store_name, 
            address, 
            phone, 
            lat, 
            lon, 
            carriage, 
            bed, 
            tableware, 
            nursingroom, 
            meetingroom, 
            diapers, 
            playroom,
            chair,
            menu
        ]).then( data => console.log(data))
            .catch( err => console.log(err));
    }

    res.json({ result : "ok" });
});

// 병원 데이터 import
router.post("/api/places/hospitals", async (req, res) => {
    const hospitalList = require("../json/hospitals.json");

    for(let item of hospitalList){
        const space_code = 2;
        const { store_name, address, phone, lat, lon, Examination_item } = item;
        const SQL = `
        insert into 
        spaces( space_code, space_name, addr, phone, lat, lon, add_info )
        values( 
            ?, ? , ? , ? , ? , ?, 
            json_object( "examination", ? ) 
        );`;
        query(SQL, [
            space_code,
            store_name, 
            address, 
            phone,
            lat, 
            lon,
            Examination_item
        ])
        .then( data => console.log( data ))
        .catch( error => console.log( error ));
    }
    
    res.json({"result":"ok"});
});

// 키즈카페 데이터 import
router.post("/api/places/kid-cafes", (req, res) => {
    const kidCafeList = require("../json/kid_cafes.json");

    for(let item of kidCafeList){
        const space_code = 5;
        let { store_name, address, phone, lat, lon, fare } = item;
        const SQL = `
        insert into 
        spaces( space_code, space_name, addr, phone, lat, lon, add_info )
        values( 
            ?, ? , ? , ? , ? , ?, 
            json_object( "fare", ? ) 
        );`;
        query(SQL, [
            space_code,
            store_name, 
            address, 
            phone,
            lat, 
            lon,
            fare
        ])
        .then( data => console.log( data ))
        .catch( error => console.log( error ));
    }
    

    res.json({"result":"ok"});
})

// 체험관 import
router.post("/api/places/experience-centers", (req, res) => {
    const kidCafeList = require("../json/experience_centers.json");

    for(let item of kidCafeList){
        const space_code = 6;
        let { store_name, address, phone, lat, lon, fare } = item;
        const SQL = `
        insert into 
        spaces( space_code, space_name, addr, phone, lat, lon, add_info )
        values( 
            ?, ? , ? , ? , ? , ?, 
            json_object( "fare", ? ) 
        );`;
        query(SQL, [
            space_code,
            store_name, 
            address, 
            phone,
            lat, 
            lon,
            fare
        ])
        .then( data => console.log( data ))
        .catch( error => console.log( error ));
    }
    

    res.json({"result":"ok"});
})

module.exports = router;



