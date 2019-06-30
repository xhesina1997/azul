package azul.project.imagesapplication.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import azul.project.imagesapplication.storage.StorageFileNotFoundException;
import azul.project.imagesapplication.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
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


//    @GetMapping("/files/{filename:.+}")
//    @ResponseBody
//    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
//
//        Resource file = storageService.loadAsResource(filename);
//        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
//                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//    }

//    @GetMapping(value = "/all-files")
//    public List<String> listUploadedFiles() throws IOException {
//        return storageService.loadAll().map(path -> MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
//                "serveFile", path.getFileName().toString()).build().toString())
//                .collect(Collectors.toList());
//    }

//    @PostMapping("/")
//    public void handleFileUpload(@RequestParam("file") MultipartFile file) {
//             storageService.store(file);
//    }

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
