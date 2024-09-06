package controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import dto.Response_DTO;
import entity.Category;
import entity.Model;
import entity.Color;
import entity.Product_Condition;
import entity.Storage;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;

@WebServlet(name = "LoadFatures", urlPatterns = {"/LoadFatures"})
public class LoadFatures extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        Gson gson = new Gson();

        Session session = HibernateUtil.getSessionFactory().openSession();
        
        Criteria criteria1 = session.createCriteria(Category.class);
        criteria1.addOrder(Order.asc("name"));
        List<Category> categorylist = criteria1.list();
        
        Criteria criteria2 = session.createCriteria(Model.class);
        criteria2.addOrder(Order.asc("name"));
        List<Model> modellist = criteria2.list();
        
        Criteria criteria3 = session.createCriteria(Color.class);
        criteria3.addOrder(Order.asc("name"));
        List<Color> colorlist = criteria3.list();
        
        Criteria criteria4 = session.createCriteria(Storage.class);
        criteria4.addOrder(Order.asc("id"));
        List<Storage> storagelist = criteria4.list();
        
        Criteria criteria5 = session.createCriteria(Product_Condition.class);
        criteria5.addOrder(Order.asc("name"));
        List<Product_Condition> productConditionlist = criteria5.list();
        
        JsonObject jsonObject = new JsonObject();
        jsonObject.add("categorylist", gson.toJsonTree(categorylist));
        jsonObject.add("modellist", gson.toJsonTree(modellist));
        jsonObject.add("colorlist", gson.toJsonTree(colorlist));
        jsonObject.add("storagelist", gson.toJsonTree(storagelist));
        jsonObject.add("productConditionlist", gson.toJsonTree(productConditionlist));
        
        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(jsonObject));
        
        session.close();

    }

}
