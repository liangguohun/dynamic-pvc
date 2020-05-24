
```

-javaagent:D:\Workspace\skywalking-agent.jar
-Dskywalking.agent.service_name=cloud-gateway
-Dskywalking.collector.backend_service=192.168.1.4:11800

-javaagent：用于指定探针路径
-Dskywalking.agent.service_name：用于重写 agent/config/agent.config 配置文件中的服务名
-Dskywalking.collector.backend_service：用于重写 agent/config/agent.config 配置文件中的服务地址

https://mirrors.tuna.tsinghua.edu.cn/apache/skywalking/6.5.0/
https://www.jianshu.com/p/77b4e70c7817

https://www.jianshu.com/p/4f4c182bcbd8


```