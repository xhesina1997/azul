package com.azul.metadataservice.controller;

import com.azul.coredomain.meta.exceptions.ServiceException;
import com.azul.coredomain.meta.model.Car;
import com.azul.coredomain.meta.model.CarBrand;
import com.azul.coredomain.meta.model.CarModel;
import com.azul.metadataservice.dao.CarBrandRepository;
import com.azul.metadataservice.dao.CarModelRepository;
import com.azul.metadataservice.dao.CarRepository;
import com.netflix.discovery.converters.Auto;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.LimitExceededException;
import java.util.List;

@RestController
@RequestMapping(value = "/cars")
public class CarController {

    private static final Logger logger = LoggerFactory.getLogger(CarController.class);
    private static final String ERR_GET = "Error getting results:  ";
    private static final int MAX_QUERY = 100;

    @Autowired
    private CarRepository repos;

    @Autowired
    private CarBrandRepository brandRepository;

    @Autowired
    private CarModelRepository modelRepository;

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
    @ApiOperation(value = "Get all brands")
    @RequestMapping(value = "/brands",method = RequestMethod.GET)
    public List<CarBrand> getAllBrands(){
        try {
            if(brandRepository.findAll().size() > MAX_QUERY) {
                throw new LimitExceededException("Query limit exceeded!");
            }else{
                return brandRepository.findAll();
            }
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
            if(modelRepository.findAll().size() > MAX_QUERY) {
                throw new LimitExceededException("Query limit exceeded!");
            }else{
                return modelRepository.findAll();
            }
        }catch (Exception e){
            logger.error(ERR_GET + e.getMessage());
            throw new ServiceException(e);
        }
    }

    //Helpers
    private Boolean validateCar(Car car){
        return true;
    }

}
