package com.minatoorgtestcase.gae1partialsearch1.webservice;

import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;

public interface IChangelogService {
	PaginationResponse getChangelog(PaginationRequest request,String entityName, String entityId,
			String fieldName, Long fromModifiedDate);
}
