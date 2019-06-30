package com.azul.metadataservice.config;

import com.mongodb.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.data.mongodb.core.convert.MongoConverter;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableMongoAuditing
public class MongoConfig extends AbstractMongoConfiguration {

//    @Value("${spring.data.mongodb.username}")
//    private String username;

//    @Value("${spring.data.mongodb.password}")
//    private String password;

//    @Value("${spring.data.mongodb.database}")
//    private String database;

//    @Value("${spring.data.mongodb.host}")
//    private String host;

//    @Value("${spring.data.mongodb.port}")
//    private int port;

//    @Value("${spring.data.mongodb.connectTimeout}")
//    private int connectTimeout;

//    @Value("${spring.data.mongodb.socketTimeout}")
//    private int socketTimeout;

//    @Value("${spring.data.mongodb.maxWaitTime}")
//    private int maxWaitTime;

//    @Value("${spring.data.mongodb.socketKeepAlive}")
//    private boolean socketKeepAlive;

    private MongoClient client;

    private String username;
    private String password;
    private String database = "cars";
    private String host = "localhost";
    private int port = 27017;
    private int connectTimeout = 120000;
    private int socketTimeout = 60000;
    private int maxWaitTime = 120000;
    private boolean socketKeepAlive = true;

    @Autowired
    private MongoConverter mongoConverter;

    @Override
    protected String getDatabaseName() {
        return database;
    }

    public Mongo mongo() throws UnknownHostException {
        return getClient();
    }

    @Override
    public @Bean
    MongoDbFactory mongoDbFactory()  {
        return new SimpleMongoDbFactory(mongoClient(), getDatabaseName());
    }

    @Override
    public MongoClient mongoClient() {
        try {
            return getClient();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public @Bean
    MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoDbFactory(), mongoConverter);
    }

    private MongoClient getClient() throws UnknownHostException {
        if (client != null)
            return client;
        client = new MongoClient(getServerAddress(), getMongoCredentials(), getMongoClientOptions());
        return client;
    }

    private List<ServerAddress> getServerAddress() throws UnknownHostException {
        List<ServerAddress> list = new ArrayList();
        list.add(new ServerAddress(host, port));
        return list ;
    }

    private List<MongoCredential> getMongoCredentials() {
        if(password == null || password.isEmpty())
            return new ArrayList<>();
        MongoCredential credential =
                MongoCredential.createCredential(username, getDatabaseName(), password.toCharArray());
        return Arrays.asList(credential);
    }

    private MongoClientOptions getMongoClientOptions() {
        return MongoClientOptions.builder().connectTimeout(connectTimeout).socketTimeout(socketTimeout)
                .maxWaitTime(maxWaitTime).socketKeepAlive(socketKeepAlive).build();
    }

}
