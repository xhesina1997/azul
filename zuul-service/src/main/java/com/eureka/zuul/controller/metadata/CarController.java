package com.eureka.zuul.controller.metadata;

import com.azul.coredomain.meta.exceptions.ServiceException;
import com.azul.coredomain.meta.model.Car;
import com.azul.coredomain.meta.model.CarBrand;
import com.azul.coredomain.meta.model.CarModel;

import com.eureka.zuul.repository.metadata.CarBrandRepository;
import com.eureka.zuul.repository.metadata.CarModelRepository;
import com.eureka.zuul.repository.metadata.CarRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.querydsl.core.types.Predicate;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.naming.LimitExceededException;
import java.util.List;

@RestController
@RequestMapping(value = "/metadata/cars")
public class CarController {

    private static final Logger logger = LoggerFactory.getLogger(CarController.class);
    private static final String ERR_GET = "Error getting results:  ";
    private static final int MAX_QUERY = 5000;

    @Autowired
    private CarRepository repos;

    @Autowired
    private CarBrandRepository brandRepository;

    @Autowired
    private CarModelRepository modelRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Fetch a specific page from repository")
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public Page<Car> search(@QuerydslPredicate Predicate predicate,
                            @PageableDefault(sort = {"created"}, direction = Sort.Direction.DESC) Pageable pageable) {
        if (predicate == null) {
            return repos.findAll(pageable);
        }
        return repos.findAll(predicate, pageable);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Get all cars")
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public List<Car> getAll(){
        try {
            if(repos.findAll().size() > MAX_QUERY) {
                throw new LimitExceededException("Query limit exceeded!");
            }else{
                return repos.findAll();
            }
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Get car by uuid")
    @RequestMapping(value = "/uuid/{uuid}",method = RequestMethod.GET)
    public Car getByUUID(@PathVariable String uuid){
        try {
            return repos.findFirstByUuid(uuid);
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Get car by user")
    @RequestMapping(value = "/user/{username}",method = RequestMethod.GET)
    public Page<Car> getAllByUserPaged(@PathVariable String username, Pageable pageable){
        try {
            return repos.findAllByUser_Username(username, pageable);
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Upload new Car")
    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public Boolean upload(@RequestBody Car car){
        try {
            if(!this.validateCar(car)){
                throw new ServiceException("Information not valid");
            }else{
                repos.save(car);
                return true;
            }
        }catch (Exception e){
            throw new ServiceException(e);
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Delete Car")
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public Boolean delete(@RequestBody Car car){
        try {
            if(!this.validateCar(car)){
                throw new ServiceException("Information not valid");
            }else{
                repos.delete(car);
                return true;
            }
        }catch (Exception e){
            throw new ServiceException(e);
        }

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Add user who favourite post")
    @RequestMapping(value = "/userId/{userId}/postId/{postId}",method = RequestMethod.GET)
    public void addUserWhoFavourite(@PathVariable String userId, @PathVariable String postId){
        try {
            if(repos.findById(postId).isPresent()){
                Car car  = repos.findById(postId).get();
                car.addUserToUserWhoFavourite(userId);
                repos.save(car);

            }

        }catch (Exception e){
            throw new ServiceException(e);
        }

    }

    /*================== BRANDS & MODELS ==================*/

    @Autowired
    private ResourceLoader resourceLoader;

    @PostConstruct
    private void populateBrandsAndModels(){
        ObjectMapper objectMapper = new ObjectMapper();
        try{
            if(brandRepository.findAll().size() == 0){
                logger.info("======= CREATING MANUFACTURER REPOSITORY =======");
                List<CarBrand> carBrands = objectMapper.readValue(resourceLoader.getResource("classpath:/car_brands.json").getInputStream(), new TypeReference<List<CarBrand>>(){});
                brandRepository.saveAll(carBrands);
                logger.info("======= MANUFACTURER CREATION FINISHED =======");
            }
            if(modelRepository.findAll().size() == 0){
                logger.info("======= CREATING MODEL REPOSITORY =======");
                List<CarModel> carModels = objectMapper.readValue(resourceLoader.getResource("classpath:/car_models.json").getInputStream(), new TypeReference<List<CarModel>>(){});
                modelRepository.saveAll(carModels);
                logger.info("======= MODEL CREATION FINISHED =======");
            }
        }catch (Exception e){
            logger.error(e.toString());
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Get all brands")
    @RequestMapping(value = "/brands",method = RequestMethod.GET)
    public List<CarBrand> getAllBrands(){
        try {
            return brandRepository.findAll();
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Get all models")
    @RequestMapping(value = "/models",method = RequestMethod.GET)
    public List<CarModel> getAllModels(){
        try {
            return modelRepository.findAll();
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }
    /*================== BRANDS & MODELS ==================*/

    /*===================== HELPERS ======================*/
    private Boolean validateCar(Car car){
        return true;
    }
    /*===================== HELPERS ======================*/

}
