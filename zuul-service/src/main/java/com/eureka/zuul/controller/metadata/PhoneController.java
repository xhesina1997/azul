package com.eureka.zuul.controller.metadata;

import com.azul.coredomain.meta.exceptions.NotFoundException;
import com.azul.coredomain.meta.exceptions.ServiceException;
import com.azul.coredomain.meta.model.Phone;
import com.eureka.zuul.repository.metadata.PhoneRepository;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping(value = "/metadata/phone")
public class PhoneController {
    private static final Logger logger = LoggerFactory.getLogger(PhoneController.class);
    private static final String ERR_GET = "Error getting phone:  ";


    @Autowired
    private PhoneRepository phoneRepository;


    @ApiOperation(value = "Get Phones")
    @RequestMapping(method = RequestMethod.GET)
    public List<Phone> getAllPhones(){
        return phoneRepository.findAll();
    }

    @ApiOperation(value = "Get Phone by id")
    @RequestMapping(value = "/phoneId/{id}",method = RequestMethod.GET)
    public Phone getPhoneById(@PathVariable String id){
        try{
            return phoneRepository.findFirstById(id);
        } catch (NotFoundException nE) {
            throw nE;
        } catch (Exception e) {
            logger.error("Error removing phone:  " + e.getMessage());
            throw new ServiceException(e);
        }

    }

    @ApiOperation(value = "Save Phone")
    @RequestMapping(method = RequestMethod.POST)
    public boolean savePhone(@RequestBody Phone phone){
        try {
            if( phone == null ){
                logger.error("No provided data for phone" );
                throw new NotFoundException(Phone.class.toString(), "No provided data for phone");
            }
            phoneRepository.save(phone);
            return true;
        } catch (Exception e) {
            logger.error(ERR_GET+ e.getMessage());
            throw new ServiceException(e);
        }
    }



    @ApiOperation(value = "Delete phone")
    @RequestMapping(value = "/phone/{id}", method = RequestMethod.DELETE)
    public boolean deletePhoneById(@PathVariable String id) {
        try {
            Phone phone = phoneRepository.findFirstById(id);
            if (phone == null) {
                logger.error("Request to delete with non-existent phone id:  " + id);
                throw new NotFoundException(Phone.class.toString(), id);
            }
            phoneRepository.delete(phone);
            return true;
        } catch (NotFoundException nE) {
            throw nE;
        } catch (Exception e) {
            logger.error("Error removing phone:  " + e.getMessage());
            throw new ServiceException(e);
        }
    }




}
