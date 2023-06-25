# CMake

[Cmake常用命令（三）_cmake判断目录存在-CSDN博客](https://blog.csdn.net/zhanglehes/article/details/125672388)





```cmake
cmake -DCMAKE_INSTALL_PREFIX=/path/to/install ..
cmake --build . --config Release --target install
set(CMAKE_PREFIX_PATH "/path/to/MyPackage1;/path/to/MyPackage2" ${CMAKE_PREFIX_PATH})
find_package(MyLibrary REQUIRED)
```





```cmake
function(find_all_libraries LIBRARIES SEARCH_PATH)
  file(GLOB_RECURSE LIBRARY_PATHS "${SEARCH_PATH}/*.so" "${SEARCH_PATH}/*.a")
  foreach(library ${LIBRARIES})
    set(library_path "")
    foreach(path ${LIBRARY_PATHS})
      get_filename_component(name "${path}" NAME)
      if("${name}" MATCHES "^lib${library}.*\\.so$" OR "${name}" MATCHES "^lib${library}.*\\.a$")
        set(library_path "${path}")
        break()
      else()
      endif()
    endforeach()
    if(library_path)
      message(STATUS "Found ${library}: ${library_path}")
      list(APPEND LIBRARY_PATHS_FOUND "${library_path}")
    else()
      message(FATAL_ERROR "Cannot find ${library}")
    endif()
  endforeach()
  set(LIBRARY_PATHS_FOUND ${LIBRARY_PATHS_FOUND} PARENT_SCOPE)
  link_directories(${LIBRARY_PATHS_FOUND})
endfunction()
```

