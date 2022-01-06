package lm.book.util;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Service
public class UploadUtil {

    public String upload(MultipartFile file) {
        String path = System.getProperty("user.dir") + "/src/main/resources/static/images/" ;
        File folder = new File(path);
        if (!folder.exists()) {
            if (folder.mkdir()) {
                System.out.println("Directory is created!");
            } else {
                System.out.println("Failed to create directory!");
            }
        }
        String filename = file.getOriginalFilename();
        String newFileName = FilenameUtils.getBaseName(filename) + "." + "jpeg";
        File serverFile = new File (path + File.separator + newFileName);
        try {
            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
        } catch(Exception e) {
            e.printStackTrace();
        }

        return newFileName;
    }
}