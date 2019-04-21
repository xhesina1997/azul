package com.eureka.zuul.payload;

import java.time.Instant;

public class UserProfile {
    private String id;
    private String username;
    private String name;
    private long joinedAt;


    public UserProfile(String id, String username, String name, long joinedAt) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.joinedAt = joinedAt;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getJoinedAt() {
        return joinedAt;
    }

    public void setJoinedAt(long joinedAt) {
        this.joinedAt = joinedAt;
    }

}
