package com.eureka.zuul.controller.images2;

import com.eureka.zuul.storage.StorageFileNotFoundException;
import com.eureka.zuul.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(path = "/images")
public class FileUploadController {

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @RequestMapping(value="/test", method = RequestMethod.GET)
    public String test() {
        return "IMAGES WORKING";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cdn/{directory}/{filename}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename, @PathVariable String directory) {

        Resource file = storageService.loadAsResource(directory + '/' + filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/directory/{directory}/name/{name}")
    public boolean handleFileUpload(@RequestParam("file") MultipartFile file, @PathVariable String directory, @PathVariable String name) {
        storageService.storeInDirectory(file, name, directory);
        return true;
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }


}
