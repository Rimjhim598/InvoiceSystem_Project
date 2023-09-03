package com.invoicesystem.serverService;

import java.util.List;

import com.invoicesystem.serverModel.Invoice;

public interface Invoiceservice {
	public Invoice AddInvoice(Invoice invoice) ;
	public List<Invoice> getInvoices();
	//public Invoice deleteInvoice(long parseLong);
	public Invoice deleteInvoice(Long id);
	//Invoice deleteInvoice(long id); 
	

}
