package com.sunbeam.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "interests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Interests extends BaseEntity {

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "shown_by", nullable = false)
    private User_basic_details shownByUser;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "interests_shown_in_users", 
        joinColumns = @JoinColumn(name = "interests_id"),
        inverseJoinColumns = @JoinColumn(name = "shown_in_user_id") 
    )
    private List<User_basic_details> shownInUsers;
}
