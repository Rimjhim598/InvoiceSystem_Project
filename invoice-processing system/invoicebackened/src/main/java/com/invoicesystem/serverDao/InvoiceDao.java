package com.invoicesystem.serverDao;
import com.invoicesystem.serverModel.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {

}
