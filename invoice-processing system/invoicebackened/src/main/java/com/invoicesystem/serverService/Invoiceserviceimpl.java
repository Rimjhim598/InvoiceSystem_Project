package com.invoicesystem.serverService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invoicesystem.serverDao.InvoiceDao;
import com.invoicesystem.serverModel.Invoice;
@Service
public class Invoiceserviceimpl implements Invoiceservice {
	@Autowired
	private InvoiceDao invoiceDao;

	@Override
	public Invoice AddInvoice(Invoice invoice) {
		invoiceDao.save(invoice);
        return invoice;
	}
	@Override
	public List<Invoice> getInvoices(){
		return invoiceDao.findAll();
	}
	
	
	@Override
	public Invoice deleteInvoice(Long id) {
		Invoice invoice = invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;
	}
	
}
