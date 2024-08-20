package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.User_Details;

public interface UserDetailsDao extends JpaRepository<User_Details, Long> {
    @Query("SELECT new com.sunbeam.dto.CardsListDto(u.id, u.fullName, u.age) FROM User_Details u WHERE "
            + "(((:minAge IS NULL OR u.age >= :minAge) AND (:maxAge IS NULL OR u.age <= :maxAge)) AND "
            + "(:height IS NULL OR u.height >= :height) OR "
            + "(:religion IS NULL OR u.religion = :religion) OR "
            + "(:caste IS NULL OR u.caste = :caste) OR "
            + "(:education IS NULL OR u.education = :education) OR "
            + "(:isVegetarian IS NULL OR :isVegetarian IS FALSE OR u.isVegeterain = :isVegetarian) OR "
            + "(:isSmoker IS NULL OR :isSmoker IS FALSE OR u.isSmoker = :isSmoker) OR "
            + "(:isDrinker IS NULL OR :isDrinker IS FALSE OR u.isDrinker = :isDrinker)) AND "
            + "(u.gender != :gender)")
    List<CardsListDto> applyFilters(@Param("minAge") Integer minAge, 
                                    @Param("maxAge") Integer maxAge,
                                    @Param("height") Integer height, 
                                    @Param("religion") Religion religion, 
                                    @Param("caste") Caste caste,
                                    @Param("education") Education education,
                                    @Param("isVegetarian") Boolean isVegetarian,
                                    @Param("isSmoker") Boolean isSmoker,
                                    @Param("isDrinker") Boolean isDrinker,
                                    @Param("gender") Boolean gender);
    
    @Query("SELECT u.religion FROM User_Details u WHERE u.id = :id")
    Religion findReligion(@Param("id") Long id);
    
    @Query("SELECT u.caste FROM User_Details u WHERE u.id = :id")
    Caste findCaste(@Param("id") Long id);
    
    @Query("SELECT u.education FROM User_Details u WHERE u.id = :id")
    Education findEducation(@Param("id") Long id);
    
    @Query("SELECT u.gender FROM User_Details u WHERE u.id = :id")
    boolean findGender(@Param("id") Long id);
    
    @Query("SELECT new com.sunbeam.dto.CardsListDto(u.id, u.fullName, u.age) FROM User_Details u WHERE "+
    		"(u.id IN :ids) AND " +
    		"(u.gender != :gender)")
    List<CardsListDto> getCardsByIds(@Param("ids") List<Long> ids,@Param("gender") boolean gender);
    
    
}
